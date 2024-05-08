import React from 'react';
import PropTypes from 'prop-types';
export declare const useFeathers: () => any;
export declare const FeathersProvider: {
    ({ children, client: feathersClient, initialServices, realtime, idFieldName, }: {
        children: any;
        client: any;
        initialServices?: any[];
        realtime: any;
        idFieldName: any;
    }): React.JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        client: PropTypes.Validator<object>;
        realtime: PropTypes.Requireable<boolean>;
        initialServices: PropTypes.Requireable<string[]>;
    };
    defaultProps: {
        initialServices: any[];
        realtime: boolean;
        idFieldName: string;
    };
};
