import * as _ from 'lodash';

export const isEmpty = (value: any) => {
    return _.isEmpty(value) ? (_.isNumber(value) || _.isBoolean(value) ? false : true) : false;
};