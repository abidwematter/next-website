import React, {Fragment, useEffect, useState} from 'react';
import Link from 'next/link'
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';



const Category = (props) => {
    const [category,setCategory] = useState([])

    useEffect(() => {
        getCategoryData()
    },[])
    const getCategoryData = async() => {
        let url = API_CONSTANTS.category.replace(
          "category_id",
          props?.data
        );
        const menuData =  await HttpService().GET(url);
        setCategory(menuData?.data)
      }
  
    return (
        <Fragment>
            <ul className="style-none">
               {category.map((val, i)=>(
                    <li key={i} className='category'>
                    <Link href={"/category/" + val.slug}>{val.name} </Link>
                </li>
               ))}
            </ul>
        </Fragment>
    )
}

export default Category