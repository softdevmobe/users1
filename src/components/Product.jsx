import axiosInstance from "./axiosConfig";
import React, { Component } from "react";
import CustomInput from "./customInput";
import axios from "axios";
import { NumericFormat } from "react-number-format";
class Product extends Component {
  state = {
    product: {
      title: "",
      price: "",
      percent: "",
      picture: null,
    },
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      // const { title, price, perent, picture } =  this.state.product;
      formData.append("title", this.state.product.title);
      formData.append("price", this.state.product.price);
      formData.append("pecent", this.state.product.perent);
      formData.append("picture", this.state.product.picture);
      for (let [key, value] of formData.entries()) {
        console.log(`${key} :`, value);
      }
      
      
      const response = await axios.post("/api/products", formData);
    } catch (error) {
      alert("login failed .");
    }
  };
  handleChange = async (e) => {
    const { name, files } = e.target;
    if (name === "picture") {
      this.setState({ product: { ...this.state.product, [name]: files[0] } });
    } else {
      this.setState({ product: { ...this.state.product, [name]: e.target.value } });
    }
  };
  render() {
    const { title, price, perent } = this.state.product;
    return (
      <form onSubmit={this.handleSubmit}>
        <CustomInput name="title" value={title} label="title" onChange={this.handleChange} />
        <CustomInput name="price" value={price} label="price" onChange={this.handleChange} />
        <CustomInput name="perent" value={perent} label="perent" onChange={this.handleChange} />

        <NumericFormat className="form-control" value="20020220" allowLeadingZeros thousandSeparator="," />
        <CustomInput name="picture" label="picture" onChange={this.handleChange} type="file" />
        <button className="btn btn-primary">save</button>
      </form>
    );
  }
}

export default Product;
