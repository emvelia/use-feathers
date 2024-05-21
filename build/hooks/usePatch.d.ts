declare const usePatch: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetPatchState: () => any;
    patchAction: (id: any, data?: {}, params?: {}) => any;
};
export default usePatch;
