import React, { useEffect } from "react";
import { QUERY_AREA } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/react-hooks";

export default function Filter() {
  const { loading, data } = useQuery(QUERY_AREA);
  useEffect(() => {
    console.log(data);
  }, [data, loading]);

//   return (
//     <div>
//       {data.area.map((item) => {
//         return (
//           <div className="modal-cult-item">
//             <input type="checkbox" id={item.name} />
//             <label for={item.name}>{item.name}</label>
//           </div>
//         );
//       })}
//     </div>
//   );
}
