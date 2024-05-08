declare const useRemove: ({ dispatch, resetState, feathersClient, state }: {
    dispatch: any;
    resetState: any;
    feathersClient: any;
    state: any;
}) => (service: string) => {
    state: any;
    resetRemoveState: () => any;
    removeAction: (id: any, query?: {}) => void;
};
export default useRemove;
