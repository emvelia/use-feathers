declare const useGet: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetGetState: () => any;
    getAction: (id: string) => void;
};
export default useGet;
