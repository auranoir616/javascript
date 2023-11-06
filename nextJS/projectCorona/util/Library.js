export const sum = function (key,props){
    if(props.isGlobal){
        switch(key){
            case 'positif':
                return props.response[0].positif;
                case 'sembuh':
                return props.response[0].sembuh;
                case 'meninggal':
                return props.response[0].meninggal;
                case 'kasus_aktif':
                return props.response[0].kasus_aktif;
                default:
                return 0;
        }
    }
    return 0;
}
// export const sum = function (key, props) {
//     if (props.isGlobal === true && props.data) {
//       switch (key) {
//         case 'positif':
//           return props.data[0]?.positif || 0;
//         case 'sembuh':
//           return props.data[0]?.sembuh || 0;
//         case 'meninggal':
//           return props.data[0]?.meninggal || 0;
//         case 'kasus_aktif':
//           return props.data[0]?.kasus_aktif || 0;
//         default:
//           return 0;
//       }
//     }
//   };
  