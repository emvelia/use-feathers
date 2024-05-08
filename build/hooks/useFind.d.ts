declare const useFind: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetFindState: () => any;
    findAction: (query?: {}) => void;
};
export default useFind;
