import { useRef, useEffect } from 'react'
import WebMap from "@arcgis/core/WebMap";
import Editor from '@arcgis/core/widgets/Editor';
import UtilityNetworkValidateTopology from '@arcgis/core/widgets/UtilityNetworkValidateTopology';
import VersionManagementService from '@arcgis/core/versionManagement/VersionManagementService';
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import './App.css'

defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.13.2/assets" });
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.31/assets" });

function App() {
  const viewDiv = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (viewDiv.current && !isMounted.current) {
      let view;
      let editor;
      let versionManagementService;
      const versionManagementServiceUrl = "https://sampleserver7.arcgisonline.com/server/rest/services/UtilityNetwork/NapervilleElectricV5/VersionManagementServer";

      const mapElement = document.querySelector("arcgis-map");
      const webMap = new WebMap({
        portalItem: {
          id: "471eb0bf37074b1fbb972b1da70fb310"
        }
      });
      mapElement.map = webMap;

      mapElement.addEventListener("arcgisViewReadyChange", async (event) => {
        view = event.target.view;
        if (!(view.map.utilityNetworks.items.length > 0)) {
          alert("The webmap does not contain a utility network layer.");
          return;
        }

        const utilityNetwork = view.map.utilityNetworks.getItemAt(0);
        const unVT = new UtilityNetworkValidateTopology({
          view: view,
          utilityNetwork: utilityNetwork,
        });
        view.ui.add(unVT, "top-right");

        versionManagementService = new VersionManagementService({
          url: versionManagementServiceUrl,
        });
        await versionManagementService.load();
      });

      const getVersionName = () => view.map.utilityNetworks.items[0].gdbVersion;

      const handleEditSession = async (action) => {
        const versionName = await getVersionName();
        if (versionName && versionName.toLowerCase() !== "sde.default") {
          const versionIdentifier = await versionManagementService.getVersionIdentifierFromName(versionName);
          if (action === "start") {
            if (!editor) {
              editor = new Editor({ view: view });
              view.ui.add(editor, "top-left");
              await versionManagementService.startReading(versionIdentifier);
              await versionManagementService.startEditing(versionIdentifier);
              console.log("Start editing ...");
            }
          } else if (action === "stop") {
            if (editor) {
              editor.destroy();
              editor = null;
              const saveChanges = confirm("Save editing changes?");
              await versionManagementService.stopEditing(versionIdentifier, saveChanges);
              await versionManagementService.stopReading(versionIdentifier);
              console.log("Stop editing ...");
            }
          }
        } else {
          alert(versionName ? "The editing operation is not supported against the default version." : "No version is selected. Select a version to proceed.");
        }
      };

      const handleUndoRedo = async (action) => {
        const versionName = await getVersionName();
        if (versionName && versionName.toLowerCase() !== "sde.default") {
          const versionIdentifier = await versionManagementService.getVersionIdentifierFromName(versionName);
          if (action === "undo") {
            await versionManagementService.undo(versionIdentifier);
          } else if (action === "redo") {
            await versionManagementService.redo(versionIdentifier);
          }
        }
      };

      const handleReconcilePost = async (action) => {
        const versionName = getVersionName();
        if (versionName && versionName.toLowerCase() !== "sde.default") {
          try {
            const versionIdentifier = await versionManagementService.getVersionIdentifierFromName(versionName);
            if (action === "reconcile") {
              await versionManagementService.reconcile(versionIdentifier, {
                abortIfConflicts: true,
                conflictDetection: "by-attribute",
                withPost: false
              });
            } else if (action === "post") {
              await versionManagementService.post(versionIdentifier);
            }
          } catch (error) {
            alert(error.message);
          }
        }
      };

      document.getElementById("startEditingButton").addEventListener("click", () => handleEditSession("start"));
      document.getElementById("stopEditingButton").addEventListener("click", () => handleEditSession("stop"));
      document.getElementById("undoButton").addEventListener("click", () => handleUndoRedo("undo"));
      document.getElementById("redoButton").addEventListener("click", () => handleUndoRedo("redo"));
      document.getElementById("reconcileButton").addEventListener("click", () => handleReconcilePost("reconcile"));
      document.getElementById("postButton").addEventListener("click", () => handleReconcilePost("post"));
    }
    isMounted.current = true;
  }, [viewDiv]);

  return (
    <div className="viewDiv" ref={viewDiv}>
      <arcgis-map>
        <arcgis-version-management position="top-right" label="Version Management"></arcgis-version-management>
      </arcgis-map>
      <div id="paneDiv1" className="esri-widget">
        <button id="startEditingButton" className="esri-button esri-button-overwrite">Start Editing</button>
        <button id="undoButton" className="esri-button esri-button-overwrite">Undo</button>
        <button id="redoButton" className="esri-button esri-button-overwrite">Redo</button>
        <button id="stopEditingButton" className="esri-button esri-button-overwrite">Stop Editing</button>
      </div>
      <div id="paneDiv2" className="esri-widget">
        <button id="reconcileButton" className="esri-button esri-button-overwrite">Reconcile</button>
        <button id="postButton" className="esri-button esri-button-overwrite">Post</button>
      </div>
    </div>
  )
}

export default App
