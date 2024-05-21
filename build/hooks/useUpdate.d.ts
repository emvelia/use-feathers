declare const useUpdate: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetUpdateState: () => any;
    updateAction: (id: string, params?: {}, query?: {}) => any;
};
export default useUpdate;
