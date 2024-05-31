import styles from "@/utils/saas/FormComponent.module.scss";
import { ChangeEventHandler, FormEventHandler } from "react";

interface formData {
  price: number;
  description: string;
  title: string;
  discountPercentage: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  heading: string;
}

const ProductForm = (formData: formData) => {
  return (
    <form className={styles.form} onSubmit={formData.handleSubmit}>
      <p className={styles.title}>{formData.heading} Product</p>
      <p className={styles.message}>Fill in the product details below.</p>
      <div className={styles.flex}>
        <label>
          <input
            type="text"
            name="title"
            placeholder=""
            value={formData.title}
            onChange={formData.handleChange}
            required
            className={styles.input}
          />
          <span>Title</span>
        </label>
        <label>
          <input
            type="number"
            name="price"
            placeholder=""
            value={formData.price}
            onChange={formData.handleChange}
            required
            className={styles.input}
          />
          <span>Price</span>
        </label>
      </div>
      <div className={styles.flex}>
        <label>
          <input
            type="number"
            name="discountPercentage"
            placeholder=""
            value={formData.discountPercentage}
            onChange={formData.handleChange}
            required
            className={styles.input}
          />
          <span>Discount Percentage</span>
        </label>
        <label>
          <input
            type="number"
            name="stock"
            placeholder=""
            value={formData.stock}
            onChange={formData.handleChange}
            required
            className={styles.input}
          />
          <span>Stock</span>
        </label>
      </div>
      <label>
        <input
          type="text"
          name="brand"
          placeholder=""
          value={formData.brand}
          onChange={formData.handleChange}
          required
          className={styles.input}
        />
        <span>Brand</span>
      </label>
      <label>
        <input
          type="text"
          name="category"
          placeholder=""
          value={formData.category}
          onChange={formData.handleChange}
          required
          className={styles.input}
        />
        <span>Category</span>
      </label>
      <label>
        <input
          type="text"
          name="thumbnail"
          placeholder=""
          value={formData.thumbnail}
          onChange={formData.handleChange}
          required
          className={styles.input}
        />
        <span>Thumbnail URL</span>
      </label>
      <label>
        <textarea
          name="description"
          placeholder=""
          value={formData.description}
          onChange={formData.handleChange}
          rows={5}
          required
          className={styles.input}
        />
        <span>Description</span>
      </label>
      <button type="submit" className={styles.submit}>
        {formData.heading} Product
      </button>
    </form>
  );
};

export default ProductForm;
