declare const useCreate: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetCreateState: () => any;
    createAction: (data: any, params: any) => any;
};
export default useCreate;
