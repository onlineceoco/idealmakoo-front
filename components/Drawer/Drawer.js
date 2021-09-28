import { RiMenuUnfoldFill, RiLogoutCircleLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";
import Link from 'next/link'
export const menuItems = [
  {
    name: "زمینه فعالیت",
    
    subMenus: [
      { name: "دندان مصنوعی", to: "/dentures" },
      { name: "مواد دندان", to: "/dentalMaterials" },
      { name: "بهداشت دندان", to: "/dentalHygiene" },
    ],
  },
  {
    name: "محصولات",
    subMenus: [
      { name: "دندان های مصنوعی", to: "/products/dentures" },
      { name: "مواد دندان", to: "/products/dentalMaterials" },
      { name: "خمیردندان و مسواک", to: "/products/Toothpaste" },
      { name: "لوازم جانبی", to: "/products/extra" },
    ],
  },
  {
    name: "تحقیق و توسعه",
    subMenus: [
      { name: "خبرنامه دندان", to: "/r_d/news" },
      { name: "مقالات ایده آل ماکو", to: "/r_d/articles" },
      { name: "منابع علمی", to: "/r_d/scientificResources" },
      
    ],
  },
  {
    name: "پشتیبانی",
    subMenus: [
      { name: "مشاوره محصول", to: "/support/productAdvice" },
      { name: "پشتیبانی فروش", to: "/support/sellSupport" },
      { name: "ارتباط با مدیریت", to: "/support/CommunicationManagement" },
    ],
  },
];

function Drawer() {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  let menRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(menRef.current){
        if (!menRef.current.contains(event.target)) {
          setClose(true)
        }
      }
       
      
   
    });
  });
  let profileRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if(profileRef.current){
        if (!profileRef.current.contains(event.target)) {
          setOpen(false);
        }

      }
    });
  });

  return (
    <>
      <div ref={menRef} className={`sidebar ${close ? "close" : ""}`}>
        <div className="logo-details">
         <Link href='/'>{ <span className="logo-name">شرکت ایده آل ماکو</span>}</Link>
          <div className="dashboard-logo" onClick={() => setClose(!close)}>
            <RiMenuUnfoldFill />
          </div>
        </div>
        <ul className="nav-links">
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
            />
          ))}
          </ul>
            
              <div
              ref={profileRef}
              className={`profile-details ${open ? "open" : ""}`}
            >
              <div className="profile-content">
                <img  onClick={() => setOpen(!open)}  src={"/images/profile.png"}  alt="Profile"/>
              </div>

              <div className="name-job">
                <div className="profile-name"> User Account </div>
                <div className="job">Custome words</div>
              </div>
              <div className="profile-logo">
                <RiLogoutCircleLine />
              </div>
            </div>
          </div>
        
      
    </>
  );
}

export default Drawer;
