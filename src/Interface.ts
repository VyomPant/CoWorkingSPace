export interface Space {
    id: number;
    name?: string;
    spaceId?: number;
    type?: number;
    price?: number;
    address?: string;
    no_of_hours?: number;
    start_time?: string;
    end_time?: string;
    no_of_slots?: number;
    overall_rating?: number;
    AverageRating?: number;
    email?: string;
    dob?: string;
    contact?: string;
    bio?: string;
    typeName?: string;
    space_id: number,
    space_name?: string,
    space_address?: string,
    space_price?: number,
    space_startTime?: string,
    space_endTime?: string,
    space_noOfHours?: number,
    space_type?: number,
    space_img?: string,
    spaceType_name?: string,
    perk_id?: number,
    perk_wifi?: boolean,
    perk_ac?: boolean,
    perk_freeSnacks?: boolean,
    perk_canteen?: boolean,
    perk_plugPoint?: boolean,
    perk_powerBackup?: boolean,
    perk_projector?: boolean,
    perk_printer?: boolean,
    facilities_id?: number,
    facilities_lift?: boolean,
    facilities_locker?: boolean,
    facilities_parking?: boolean,
    facilities_washroom?: boolean,
    owner_id?: number,
    owner_name?: string,
    owner_username?: string,
    owner_password?: string,
    owner_email?: string,
    owner_dob?: string,
    owner_contact?: string,
    owner_bio?: string
}

export interface ReviewInterface {
    review_id: number,
    space_id: number,
    rating?: number,
    description?: string,
    id?: number,
    username?: string,
    password?: string,
    name?: string,
    email?: string,
    dob?: string,
    contact?: string
}

export interface User {
    contact: string
    dob: string
    email: string
    id: number
    name: string
    password: string
    username: string
    org_email: string
}

export interface Owner {
    id: number
    name: string
    username: string
    password: string
    email: string
    dob: string
    contact: string
    bio: string
}