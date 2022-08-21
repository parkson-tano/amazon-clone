import React from 'react'
import Category from './Category';
import GroupCategory from './GroupCategory';
import ProductCarousel from './ProductCarousel';
function Homebody() {
  return (
    <div>
      <div className="row px-4" style={{ marginTop: "-23%" }}>
        <div className="col-3">
          <GroupCategory
            title="Shop by Category"
            img1="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL480_QL65_.jpg"
            img2="https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UL480_QL65_.jpg"
            img3="https://m.media-amazon.com/images/I/81-vZLNca5L._AC_UL480_QL65_.jpg"
            img4="https://m.media-amazon.com/images/I/612ot2g7bPL._AC_UL480_FMwebp_QL65_.jpg"
            title1="Computer & Acceesories"
            title2="Video Games"
            title3="Baby"
            title4="Toys & Games"
            s1={6}
            s2={6}
            s3={6}
            s4={6}
          />
        </div>
        <div className="col-3">
          <Category
            title="Health and Personal Care"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Deals & Promotions"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals__2x._SY608_CB430401031_.jpg"
          />
        </div>
        <div className="col-3">
          <GroupCategory
            title="Shop by Category"
            img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_quad_backpack2X._SY232_CB630079578_.jpg"
            img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_quad_pencilcase2X._SY232_CB630079578_.jpg"
            img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_lunchbox_2X._SY232_CB630079578_.jpg"
            img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_quad_pencils2x._SY232_CB630079578_.jpg"
            title1="Notebooks"
            title2="Accessories"
            title3="Food storage"
            title4="Pencils"
            s1={6}
            s2={6}
            s3={6}
            s4={6}
          />
        </div>
        <div className="col-3">
          <Category
            title="Computers & Accessories"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
          />
        </div>
        <div className="col-3">
          <GroupCategory
            title="Educational toys for children"
            img1="https://m.media-amazon.com/images/I/41S2fDCwTkL._SY320_.jpg"
            img2="https://m.media-amazon.com/images/I/21uoU7j5uxL._SY150_.jpg"
            img3="https://m.media-amazon.com/images/I/41x4edhN4EL._SY150_.jpg"
            img4="https://m.media-amazon.com/images/I/511qeWcsmIL._SY150_.jpg"
            title1="Explore learning toys & games"
            title2="Ages 0-4"
            title3="Ages 5-13"
            title4="Age 14 +"
            s1={12}
            s2={4}
            s3={4}
            s4={4}
          />
        </div>
        <div className="col-3">
          <Category
            title="Electronics"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Get fit at home"
            image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="International top sellers in Kitchen"
            img1="https://m.media-amazon.com/images/I/71ygLu2o0OL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/81IC5+bWDgL._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/61hqjITqd5L._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/71iD5RyhuaL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/718+wyLAhyL._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/71V1LrY1MSL._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/71OHbUuDGQL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/71Twh-JbHiL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/71nA60+a7ZS._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/51aBv22vc5L._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/91ZMdAlPm-L._AC_SY400_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="Top Sellers in Books for you"
            img1="https://m.media-amazon.com/images/I/71aLultW5EL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/61Ars9rdgGS._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/91cqEsyjd-L._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/8181NkFL6SL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/91g+FlNm0oL._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/917M-S0wz7L._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/612JQc4mXaL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/71xYW677xDL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/91rNSPVrrjL._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/81PR3BDkqWL._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/616XQgErWiL._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY400_.jpg"
          />
        </div>

        <div className="col-3">
          <Category
            title="Shop backpacks"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_backpack_2X._SY608_CB630082004_.jpg"
          />
        </div>
        <div className="col-3">
          <GroupCategory
            title="Home & kitchen essentials"
            img1="https://m.media-amazon.com/images/I/41wjYZ4VYJL._SY320_.jpg"
            img2="https://m.media-amazon.com/images/I/31qkwPVi8RL._SY150_.jpg"
            img3="https://m.media-amazon.com/images/I/31tKXsUuqSL._SY150_.jpg"
            img4="https://m.media-amazon.com/images/I/21StTUJcMtL._SY150_.jpg"
            title1="Espresso machines"
            title2="Air fryers"
            title3="Vacuums"
            title4="Deals"
            s1={12}
            s2={4}
            s3={4}
            s4={4}
          />
        </div>
        <div className="col-3">
          <Category
            title="Shop Laptops & Tablets"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Shop Pet supplies"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="Most wished for in Movies & TV"
            img1="https://m.media-amazon.com/images/I/71INe5li1-L._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/81FgTp+8EWL._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/71IdIP2MAkL._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/71NY-DzHnnL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/716tw9pB0XL._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/71-7UilLTCL._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/81s2f7lABVL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/71l4X0QhAtL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/71nrZWJKA4L._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/81KrRPo5JPL._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/81toQt-b45L._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/71nqZf5nRbL._AC_SY400_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="International top sellers in Home Improvement"
            img1="https://m.media-amazon.com/images/I/81it5p7aOrL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/71-KABr9wdS._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/81+mcHomgPL._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/712rNjcx+5S._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/71xkzNQgf4S._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/71MEdhP8ceL._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/61ekV91t9qL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/81EadpJkSHL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/81WMb8riX-L._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/71qBcYrERIS._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/71e4kmJGEEL._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/718H1iH6pfL._AC_SY400_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Create with strip lights"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Shop school essentials"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_2X._SY608_CB630084689_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="Kindle E readers"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_2X._SY608_CB639752734_.jpg"
          />
        </div>
        <div className="col-3">
          <Category
            title="For your Fitness Needs"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="Best Sellers in Books"
            img1="https://m.media-amazon.com/images/I/71j0FLAauxL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/714l-Ja-VAL._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/81LFAmKY4FL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/613KCs7szvL._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/617uZq23IPL._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/71PNGYHykrL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/81XQ1+piiiL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_SY400_.jpgg"
            img11="https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/61xkvfPVupL._AC_SY400_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="Most wished for in Video Games"
            img1="https://m.media-amazon.com/images/I/51051FiD9UL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/71fa5+U25cL._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/81mqZx5X1XL._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/71QMkXmLVCL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/71MzN8WER7S._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/71HYKF4rO9L._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/81gJUSx-TjL._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/71I1bnzOg8L._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/41zSn74fPuL._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/71SfFWK2AUL._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/813IPk5WWOL._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/81-FD3tzUlL._AC_SY400_.jpg"
          />
        </div>
        <div className="col-12">
          <ProductCarousel
            title="Popular products in Apparel internationally"
            img1="https://m.media-amazon.com/images/I/61cjiuCOtrL._AC_SY400_.jpg"
            img2="https://m.media-amazon.com/images/I/81WyIjhXqjL._AC_SY400_.jpg"
            img3="https://m.media-amazon.com/images/I/71ucHOVS8qL._AC_SY400_.jpg"
            img4="https://m.media-amazon.com/images/I/81xkoWQfJyL._AC_SY400_.jpg"
            img5="https://m.media-amazon.com/images/I/71BqsimM+XL._AC_SY400_.jpg"
            img6="https://m.media-amazon.com/images/I/91-N3hxpLIL._AC_SY400_.jpg"
            img7="https://m.media-amazon.com/images/I/810ZLVKym-L._AC_SY400_.jpg"
            img8="https://m.media-amazon.com/images/I/61TLWiHnDZL._AC_SY400_.jpg"
            img9="https://m.media-amazon.com/images/I/71wTnEUaDLS._AC_SY400_.jpg"
            img10="https://m.media-amazon.com/images/I/71wTnEUaDLS._AC_SY400_.jpg"
            img11="https://m.media-amazon.com/images/I/81csxTu1FUL._AC_SY400_.jpg"
            img12="https://m.media-amazon.com/images/I/91-qQYvF3-L._AC_SY400_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Homebody