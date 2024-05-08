declare const mainHooks: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => {
    useCreate: (service: string) => {
        state: any;
        resetCreateState: () => any;
        createAction: (data: any, params: any) => void;
    };
    useFind: (service: string) => {
        state: any;
        resetFindState: () => any;
        findAction: (query?: {}) => void;
    };
    useGet: (service: string) => {
        state: any;
        resetGetState: () => any;
        getAction: (id: string) => void;
    };
    useRemove: (service: string) => {
        state: any;
        resetRemoveState: () => any;
        removeAction: (id: any, query?: {}) => void;
    };
    useUpdate: (service: string) => {
        state: any;
        resetUpdateState: () => any;
        updateAction: (id: string, params?: {}, query?: {}) => void;
    };
    usePatch: (service: string) => {
        state: any;
        resetPatchState: () => any;
        patchAction: (id: any, data?: {}, params?: {}) => void;
    };
};
export default mainHooks;
