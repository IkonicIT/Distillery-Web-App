export interface LabSample {
    labSampleId?: number;
    sampleType?: string;
    referenceNum?: string;
    sentThrough?: string;
    signature?: string;
    labInformation?: LabInformation[];
    date?: string;


}

export interface LabInformation {
    labInformationId?: number;
    description?: string;
    lotNo?: number;
    sampleQnty?: string;
}

export interface Auth {
    permissionList?: any[];
    favItems?: string;
    menus?: any[];
    childMenus?: any[];
    currentMenu?: any;
    currentSubMenu?: any;
}

export interface Permission {
    title?: string;
    routerLink?: string;
    path?: string;
    isView?: number;
    isEdit?: number;
    isDelete?: number;
    isAdd?: number;
}

export interface Role {
    roleName?: string;
    roleType: string;
    description?: string;
    status?: string;
    createdBy?: string;
    updatedBy?: string;
    permissionsList?: Permission[];
}

export interface Spirit {
    refNum?: string;
    subject?: string;
    refDate?: string;
    approvedDate?: string;
    type?: string;
    requestedQty?: number;
    receivedQty?: number;
}
