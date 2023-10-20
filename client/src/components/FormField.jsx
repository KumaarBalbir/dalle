import React from "react";

/**
 * Renders a form field component.
 *
 * @param {string} labelName - The name of the label for the field.
 * @param {string} type - The type of the input field.
 * @param {string} name - The name of the input field.
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} value - The value of the input field.
 * @param {function} handleChange - The event handler for input field changes.
 * @param {boolean} isSurpriseMe - Indicates if the "Surprise me" button should be shown.
 * @param {function} handleSurpriseMe - The event handler for the "Surprise me" button click.
 * @return {ReactNode} The rendered form field component.
 */
const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;
