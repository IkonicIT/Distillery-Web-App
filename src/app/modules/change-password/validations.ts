export class Validatons {
    constructor() { }
    static validate(obj: object, list: { property: string, validationTypes: string[] }[]) {
        let errorsList = {};
        list.forEach(ls => {
            errorsList[ls.property] = [];
            ls.validationTypes.forEach(vt => {
                if (vt === 'required') {
                    if (obj[ls.property] == null || obj[ls.property].length == 0) {
                        errorsList[ls.property].push(ls.property + ' is required');
                    }
                }
                // else if (vt.includes('min')) {
                //     const min = vt.substring(vt.lastIndexOf('(') + 1, vt.lastIndexOf(')'));
                //     if (obj[ls.property] == null || obj[ls.property].length < min) {
                //         errorsList[ls.property].push('Minumum length should be ' + min + ' characters');
                //     }
                // }
            });
        });
        if(errorsList['currentPassword'].length<1 && errorsList['newPassword'].length<1 && errorsList['confirmPassword'].length<1)
{
   if(obj['newPassword']!=obj['confirmPassword'])
   {
    errorsList['confirmPassword'].push('new password and confirm password  must be same');
   }
}
        return errorsList;
    }
}