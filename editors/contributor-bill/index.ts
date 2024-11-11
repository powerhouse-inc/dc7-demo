import { ExtendedEditor, EditorContextProps } from 'document-model-libs';
import Editor from './editor';
import { ContributorBillState, ContributorBillAction, ContributorBillLocalState } from "../../document-models/contributor-bill";

export const module: ExtendedEditor<ContributorBillState, ContributorBillAction, ContributorBillLocalState, EditorContextProps> = {
    Component: Editor,
    documentTypes: ["powerhouse/contributorbill", ],
    config: {
        id: 'editor-id',
        disableExternalControls: true,
        documentToolbarEnabled: true,
    },
};

export default module;