export const CONFIG_CONSTANTS = {
    API_DATA_KEYS: {
        NPI: 'npi',
        FIRST_NAME: 'provider_first_name',
        LAST_NAME: 'provider_last_name_(legal_name)',
        MIDDLE_NAME: 'provider_middle_name',
        DEACTIVATION_DATE: 'npi_deactivation_date',
        ADDRESS_LINE_1: 'provider_first_line_business_practice_location_address',
        ADDRESS_LINE_2: 'provider_second_line_business_practice_location_address',
        TELEPHONE: 'provider_business_practice_location_address_telephone_number',
        POST_CODE: 'provider_business_practice_location_address_postal_code',
        FAX_NUMBER: 'provider_business_practice_location_address_fax_number',
        COUNTRY: 'provider_business_practice_location_address_country_code_(if_outside_u.s.)',
        CITY: 'provider_business_practice_location_address_city_name',
        STATE: 'provider_business_practice_location_address_state_name',
        ENTITY_TYPE_CODE: 'entity_type_code',
        TELEPHONE_NUMBE: 'provider_business_practice_location_address_telephone_number',
        LICENCE_NUMBER: 'provider_license_number_1',
        GENDER: 'provider_gender_code',
        ENUMERATION_DATE: "provider_enumeration_date",
        LAST_UPDATED_DATE: "last_update_date",
        TEXONOMIES: [
            'healthcare_provider_taxonomy_code_1',
            'healthcare_provider_taxonomy_code_2',
            'healthcare_provider_taxonomy_code_3',
            'healthcare_provider_taxonomy_code_4',
            'healthcare_provider_taxonomy_code_5',
            'healthcare_provider_taxonomy_code_6',
            'healthcare_provider_taxonomy_code_7',
            'healthcare_provider_taxonomy_code_8',
            'healthcare_provider_taxonomy_code_9',
            'healthcare_provider_taxonomy_code_10',
            'healthcare_provider_taxonomy_code_11',
            'healthcare_provider_taxonomy_code_12',
            'healthcare_provider_taxonomy_code_13',
            'healthcare_provider_taxonomy_code_14',
            'healthcare_provider_taxonomy_code_15'
        ],
        BUSINESS_ADDRESS_LINE_1: 'provider_first_line_business_mailing_address',
        BUSINESS_ADDRESS_LINE_2: 'provider_second_line_business_mailing_address',
        BUSINESS_TELEPHONE: 'provider_business_mailing_address_telephone_number',
        BUSINESS_POST_CODE: 'provider_business_mailing_address_postal_code',
        BUSINESS_FAX_NUMBER: 'provider_business_mailing_address_fax_number',
        BUSINESS_COUNTRY: 'provider_business_mailing_address_country_code_(if_outside_u.s.)',
        BUSINESS_CITY: 'provider_business_mailing_address_city_name',
        BUSINESS_STATE: 'provider_business_mailing_address_state_name'
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
    },
    ENTITY_TYPE: {
        1: 'Individual',
        2: 'Organization'
    }
}