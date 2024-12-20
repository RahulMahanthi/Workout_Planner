// components/homeComp/HomeComp.jsx

import React from "react";
import "./homeComp.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import CreateMeal from "../create/CreateMeal";
import CreateEntry from "../create/CreateEntry";
import CreateRoutine from "../create/CreateRoutine";

const HomeComp = ({ image, name, description, view }) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="homeCompContainer">
      <div className="imgCont">
        <img src={image} alt="" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      {/* create */}
      <div className="buttons">
        <div className="createButton">
          <button onClick={() => setOpenPopup(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <p>Add</p>
        </div>
        {/* view */}
        <div className="viewButton">
          <Link to={view}>
            <button>
              <FontAwesomeIcon icon={faEye} />
            </button>
          </Link>
          <p>View</p>
        </div>
      </div>
      {openPopup && name === "Meals" && <CreateMeal setOpen={setOpenPopup} />}
      {openPopup && name === "Entries" && (
        <CreateEntry setOpen={setOpenPopup} />
      )}
      {openPopup && name === "Routines" && (
        <CreateRoutine setOpen={setOpenPopup} />
      )}
    </div>
  );
};
export default HomeComp;

// components/homeComp/HomeComp.jsx

// import React, { useState } from "react";
// import "./homeComp.css";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; // Importing icons for edit and delete
// import CreateMeal from "../create/CreateMeal";
// import CreateEntry from "../create/CreateEntry";
// import CreateRoutine from "../create/CreateRoutine";
// import UpdateMeal from "../update/UpdateMeal"; // New import for UpdateMeal
// import DeleteMeal from "../delete/DeleteMeal"; // New import for DeleteMeal

// const HomeComp = ({ image, name, description, view, mealId }) => { // Ensure mealId is passed
//   const [openPopup, setOpenPopup] = useState(false);
//   const [openUpdatePopup, setOpenUpdatePopup] = useState(false); // State for update popup
//   const [openDeletePopup, setOpenDeletePopup] = useState(false); // State for delete popup

//   return (
//     <div className="homeCompContainer">
//       <div className="imgCont">
//         <img src={image} alt="" />
//       </div>
//       <h2>{name}</h2>
//       <p>{description}</p>
//       {/* create */}
//       <div className="buttons">
//         <div className="createButton">
//           <button onClick={() => setOpenPopup(true)}>
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//           <p>Add</p>
//         </div>
//         {/* view */}
//         <div className="viewButton">
//           <Link to={view}>
//             <button>
//               <FontAwesomeIcon icon={faEye} />
//             </button>
//           </Link>
//           <p>View</p>
//         </div>
//         {/* update */}
//         <div className="updateButton">
//           <button onClick={() => setOpenUpdatePopup(true)}>
//             <FontAwesomeIcon icon={faEdit} />
//           </button>
//           <p>Update</p>
//         </div>
//         {/* delete */}
//         <div className="deleteButton">
//           <button onClick={() => setOpenDeletePopup(true)}>
//             <FontAwesomeIcon icon={faTrash} />
//           </button>
//           <p>Delete</p>
//         </div>
//       </div>
//       {openPopup && name === "Meals" && <CreateMeal setOpen={setOpenPopup} />}
//       {openUpdatePopup && <UpdateMeal setOpen={setOpenUpdatePopup} mealId={mealId} />} {/* Update component */}
//       {openDeletePopup && <DeleteMeal setOpen={setOpenDeletePopup} mealId={mealId} />} {/* Delete component */}
//       {openPopup && name === "Entries" && <CreateEntry setOpen={setOpenPopup} />}
//       {openPopup && name === "Routines" && <CreateRoutine setOpen={setOpenPopup} />}
//     </div>
//   );
// };

// export default HomeComp;




// components/homeComp/HomeComp.jsx

// import React, { useState } from "react";
// import "./homeComp.css";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"; // Importing icons for edit and delete
// import CreateMeal from "../create/CreateMeal";
// import CreateEntry from "../create/CreateEntry";
// import CreateRoutine from "../create/CreateRoutine";
// import UpdateMeal from "../update/UpdateMeal"; // New import for UpdateMeal
// import DeleteMeal from "../delete/DeleteMeal"; // New import for DeleteMeal
// import UpdateRoutine from "../update/UpdateRoutine"; // New import for UpdateRoutine
// import DeleteRoutine from "../delete/DeleteRoutine"; // New import for DeleteRoutine
// import UpdateEntry from "../update/UpdateEntry"; // New import for UpdateEntry
// import DeleteEntry from "../delete/DeleteEntry"; // New import for DeleteEntry

// const HomeComp = ({ image, name, description, view, mealId, routineId, entryId }) => { // Ensure ids are passed
//   const [openPopup, setOpenPopup] = useState(false);
//   const [openUpdatePopup, setOpenUpdatePopup] = useState(false); // State for update popup
//   const [openDeletePopup, setOpenDeletePopup] = useState(false); // State for delete popup

//   return (
//     <div className="homeCompContainer">
//       <div className="imgCont">
//         <img src={image} alt="" />
//       </div>
//       <h2>{name}</h2>
//       <p>{description}</p>
//       {/* create */}
//       <div className="buttons">
//         <div className="createButton">
//           <button onClick={() => setOpenPopup(true)}>
//             <FontAwesomeIcon icon={faPlus} />
//           </button>
//           <p>Add</p>
//         </div>
//         {/* view */}
//         <div className="viewButton">
//           <Link to={view}>
//             <button>
//               <FontAwesomeIcon icon={faEye} />
//             </button>
//           </Link>
//           <p>View</p>
//         </div>
//         {/* update */}
//         <div className="updateButton">
//           <button onClick={() => setOpenUpdatePopup(true)}>
//             <FontAwesomeIcon icon={faEdit} />
//           </button>
//           <p>Update</p>
//         </div>
//         {/* delete */}
//         <div className="deleteButton">
//           <button onClick={() => setOpenDeletePopup(true)}>
//             <FontAwesomeIcon icon={faTrash} />
//           </button>
//           <p>Delete</p>
//         </div>
//       </div>
//       {openPopup && name === "Meals" && <CreateMeal setOpen={setOpenPopup} />}
//       {openUpdatePopup && name === "Meals" && <UpdateMeal setOpen={setOpenUpdatePopup} mealId={mealId} />}
//       {openDeletePopup && name === "Meals" && <DeleteMeal setOpen={setOpenDeletePopup} mealId={mealId} />}
      
//       {openPopup && name === "Entries" && <CreateEntry setOpen={setOpenPopup} />}
//       {openUpdatePopup && name === "Entries" && <UpdateEntry setOpen={setOpenUpdatePopup} entryId={entryId} />}
//       {openDeletePopup && name === "Entries" && <DeleteEntry setOpen={setOpenDeletePopup} entryId={entryId} />}
      
//       {openPopup && name === "Routines" && <CreateRoutine setOpen={setOpenPopup} />}
//       {openUpdatePopup && name === "Routines" && <UpdateRoutine setOpen={setOpenUpdatePopup} routineId={routineId} />}
//       {openDeletePopup && name === "Routines" && <DeleteRoutine setOpen={setOpenDeletePopup} routineId={routineId} />}
//     </div>
//   );
// };

// export default HomeComp;
