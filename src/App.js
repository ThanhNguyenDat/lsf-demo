import { useCallback, useEffect, useMemo, useRef } from 'react';
import './App.css';
import task from "./tasks.json";


const config = `
<View>
  <Labels name="ner" toName="text">
    <Label value="Person"></Label>
    <Label value="Organization"></Label>
    <Label value="Fact"></Label>
    <Label value="Money"></Label>
    <Label value="Date"></Label>
    <Label value="Time"></Label>
    <Label value="Ordinal"></Label>
    <Label value="Percent"></Label>
    <Label value="Product"></Label>
    <Label value="Language"></Label>
    <Label value="Location"></Label>
  </Labels>
  <Text name="text" value="$text"></Text>
</View>
`

const interfaces = [
  // "annotations:add-new",
  // "annotations:comments",
  // "annotations:current",
  // "annotations:delete",
  // "annotations:deny-empty",
  // "annotations:menu",
  // "annotations:tabs",
  // "annotations:view-all",
  // "auto-annotation",
  // "basic", 
  // "comments:resolve-any",
  // "controls",
  // "edit-history",
  // "ground-truth",
  // "infobar",
  // "instruction",
  // "predictions:menu",
  // "predictions:tabs",
  // "predictions",
  // "side-column",
  // "submit",
  // "topbar",
  // "update",
]


const Component = () => {
  const lsfElementRef = useRef(null);
  const lsfRef = useRef(null);

  useEffect(() => {
    if (!!!window.LabelStudio) {
      return;
    }
    const configs = {
      user: {
        pk: 1,
        id: 1,
        firstName: "James",
        lastName: "Dean"
      },
      config: config,
      task: task,
      // task: taskToLSFormat(this.task),
      // description: this.instruction,
      interfaces,
      // users: dm.store.users.map((u) => u.toJSON()),
      // keymap: options.keymap,
      // forceAutoAnnotation: this.isInteractivePreannotations,
      // forceAutoAcceptSuggestions: this.isInteractivePreannotations,
      // messages: options.messages,
      // queueTotal,
      // queuePosition,
      // /* EVENTS */
      onSubmitDraft: onSubmitDraft,
      onLabelStudioLoad: onLabelStudioLoad,
      onTaskLoad: onTaskLoad,
      onPresignUrlForProject: onPresignUrlForProject,
      onStorageInitialized: onStorageInitialized,
      onSubmitAnnotation: onSubmitAnnotation,
      onUpdateAnnotation: onUpdateAnnotation,
      onDeleteAnnotation: onDeleteAnnotation,
      onSkipTask: onSkipTask,
      onUnskipTask: onUnskipTask,
      onGroundTruth: onGroundTruth,
      onEntityCreate: onEntityCreate,
      onEntityDelete: onEntityDelete,
      onSelectAnnotation: onSelectAnnotation,
      onNextTask: onNextTask,
      onPrevTask: onPrevTask,
    };

    lsfRef.current = new window.LabelStudio(lsfElementRef.current, configs);
  }, []);
  const onSubmitDraft = () => { }
  const onLabelStudioLoad = (LS) => {
    var c = LS.annotationStore.addAnnotation({
      userGenerate: true
    });
    LS.annotationStore.selectAnnotation(c.id);
  }
  const onTaskLoad = () => { }
  const onPresignUrlForProject = () => { }
  const onStorageInitialized = () => { }
  const onSubmitAnnotation = () => { }
  const onUpdateAnnotation = () => { }
  const onDeleteAnnotation = () => { }
  const onSkipTask = () => { }
  const onUnskipTask = () => { }
  const onGroundTruth = () => { }
  const onEntityCreate = () => { }
  const onEntityDelete = () => { }
  const onSelectAnnotation = () => { }
  const onNextTask = () => { }
  const onPrevTask = () => { }


  const handleOnClick = () => {
    const store = lsfRef?.current.store;
    console.log('store: ', store);

    const selected = store?.annotationStore?.selected || {}
    console.log('selected: ', selected);

    const regionStore = selected?.regionStore || {};
    console.log('regionStore: ', regionStore);

    const regions = regionStore.regions || [];
    console.log('regions: ', regions);

    const texts = regions.map(region => region.text);
    console.log('texts: ', texts);
  }

  return (
    <div>
      <div ref={lsfElementRef} ></div>
      <button onClick={handleOnClick}>store</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
