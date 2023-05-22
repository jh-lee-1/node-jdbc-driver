// Created connection type interface
export default interface IConnectionType {
    driver: string;
    get_config: () => object;
    get_version: () => string;
    get_query: (tableName:string) => string;
}
