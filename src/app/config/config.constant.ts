export const CONFIG_CONSTANTS = {
    API_DATA_KEYS: {
        NPI: 'npi',
        FIRST_NAME: 'provider_first_name',
        LAST_NAME: 'provider_last_name_(legal_name)',
        DEACTIVATION_DATE: 'npi_deactivation_date',
        COUNTRY: 'provider_business_practice_location_address_country_code_(if_outside_u.s.)',
        CITY: 'provider_business_practice_location_address_city_name',
        STATE: 'provider_business_practice_location_address_state_name',
    },
    STATUS: {
        ALL: {
            label: "All",
            value: "ALL" 
        },
        INACTIVE: {
            label: "Deactivated",
            value: "INACTIVE" 
        },
        ACTIVE: {
            label: "Active",
            value: "ACTIVE" 
        },
    }
}