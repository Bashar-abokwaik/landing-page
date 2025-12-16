import { useState } from "react";
import { createPortal } from "react-dom";
import "./Popup.css";

function Popup({ handleCancleBtn }) {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    weight: "",
    age: "",
    email: "",
    services: [],
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedServices = [...formData.services]; // Copy current services

      if (checked) {
        updatedServices.push(value); // Add service if checked
      } else {
        updatedServices = updatedServices.filter(
          (service) => service !== value // Remove service if unchecked
        );
      }

      setFormData((prev) => ({ ...prev, services: updatedServices })); // Update services array
    } else {
      setFormData((prev) => ({ ...prev, [name]: value })); // Update other fields
    }
  };

  // Validate form data
  const validate = (data) => {
    const validationErrors = {}; // Object to hold validation errors

    Object.entries(data).forEach(([key, value]) => {
      if (key === "services") {
        if (value.length === 0) {
          validationErrors.services = "Please select at least one service."; // Ensure at least one service is selected
        }
      } else if (!value) {
        validationErrors[key] = "This field is required"; // Check for empty fields
      } else if (key === "name" && /\d/.test(value)) {
        validationErrors.name = "Name cannot contain numbers"; // Name should not contain numbers
      }
    });
    return validationErrors; // Return the validation errors
  };

  // Handle input blur for validation
  const handleBlur = (e) => {
    const { name } = e.target; // Get the name of the field that lost focus
    const fieldErrors = validate(formData); // Validate the form data

    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name],
    })); // Update errors state for the specific field
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData); // Validate the form data
    setErrors(validationErrors); // Update errors state

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!"); // Notify user of successful submission
      handleCancleBtn(); // Close the popup
    }
  };

  // Close popup if click outside the content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      handleCancleBtn(); // Close the popup when clicking outside the content
    }
  };

  return createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <h2>Join Us</h2>
        <p>
          Start your journey with us today!
          <br />
          Sign up now and become part of an inspiring community that shares your
          passion and ambition.
          <br />
          Don’t miss the chance — your first step begins here.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Name"
          />
          {errors.name && <div className="error">{errors.name}</div>}

          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Weight"
          />
          {errors.weight && <div className="error">{errors.weight}</div>}

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Age"
          />
          {errors.age && <div className="error">{errors.age}</div>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Your Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <fieldset>
            <legend>Choose at least one service:</legend>

            <label>
              <input
                type="checkbox"
                value="resistance-training"
                checked={formData.services.includes("resistance-training")}
                onChange={handleChange}
              />
              Resistance Training Offer
            </label>

            <label>
              <input
                type="checkbox"
                value="fitness-training"
                checked={formData.services.includes("fitness-training")}
                onChange={handleChange}
              />
              Fitness Training
            </label>

            <label>
              <input
                type="checkbox"
                value="personal-trainer"
                checked={formData.services.includes("personal-trainer")}
                onChange={handleChange}
              />
              Personal Trainer
            </label>

            {errors.services && <div className="error">{errors.services}</div>}
          </fieldset>

          <input className="submit" type="submit" value="Send" />
        </form>

        <button onClick={handleCancleBtn}>Cancel</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Popup;
