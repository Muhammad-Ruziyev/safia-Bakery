import React, { useEffect, useState } from "react";
import AdminLoyaut from "../page/Admin";
import {
  getAllProducts,
  getanlyProducts,
  deleteProducts,
  createaProduct,
} from "../../Redux/Features/productSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { formatPrice } from "../../helper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { updateProduct } from "../../Redux/Features/productSlice";

const AdminProducts = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const [id, setId] = useState("");
  const [post, setPost] = useState({
    name: "",
    price: Number,
    title: "",
    image: "",
    category: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const product = useSelector(getanlyProducts);

  const deleteHandler = (id) => {
    dispatch(deleteProducts(id));
    window.location.reload();
  };

  function createItmeHandler(item) {
    console.log(item);
    dispatch(createaProduct({ ...post, _id: item._id }));
    window.location.reload();
  }

  function updateProductHandler(item) {
    console.log(item);

    const iteID = product?.find((el) => el._id == item._id);
    console.log(iteID);
    setId(iteID._id);
  }
  function reloadda() {
    window.location.reload();
  }

  function updateItem() {
    dispatch(updateProduct({ ...post, _id: id }));
  }
  return (
    <AdminLoyaut>
      <div className="container row admin-product">
        <div className="col-md-12 post">
          <button onClick={handleOpen} className="post-btn">
            post new product
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="post-div">
                <input
                  className="post-inputs"
                  onChange={(e) => setPost({ ...post, name: e.target.value })}
                  type="text"
                  placeholder="name"
                />
                <input
                  className="post-inputs"
                  onChange={(e) =>
                    setPost({ ...post, price: Number(e.target.value) })
                  }
                  type="text"
                  placeholder="price"
                />
                <input
                  className="post-inputs"
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  type="text"
                  placeholder="title"
                />
                <input
                  className="post-inputs"
                  onChange={(e) => setPost({ ...post, image: e.target.value })}
                  type="text"
                  placeholder="image"
                />
                <input
                  className="post-inputs"
                  onChange={(e) =>
                    setPost({ ...post, category: e.target.value })
                  }
                  type="text"
                  placeholder="category"
                />
                <input
                  className="post-inputs"
                  onChange={(e) => setPost({ ...post, image: e.target.value })}
                  type="text"
                  placeholder="peoples for designed"
                />
              </div>
              <button
                className="post-btn"
                onClick={() => createItmeHandler(post)}
              >
                Add post
              </button>
              <a onClick={() => reloadda()}>
                <button className="post-btn" onClick={() => updateItem(post)}>
                  update
                </button>
              </a>
            </Box>
          </Modal>
        </div>
        {product?.map((el) => {
          return (
            <>
              <section className="col-lg-4 col-md-6 col-sm-12">
                <div className="Product">
                  <div>
                    <img src={el.image} alt="" />
                  </div>
                  <div className="product-info">
                    <h3 className="name">{el.name}</h3>
                    <p className="title">{el.title}</p>
                    <div className="products-price">
                      <p>{formatPrice(el.price)}</p>
                      <a onClick={handleOpen}>
                        <button
                          onClick={() => updateProductHandler(el)}
                          className="add-to-cart-btn"
                        >
                          update
                        </button>
                      </a>
                      <a>
                        <button
                          onClick={() => deleteHandler(el._id)}
                          className="add-to-cart-btn"
                        >
                          delete
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })}
      </div>
    </AdminLoyaut>
  );
};

export default AdminProducts;
