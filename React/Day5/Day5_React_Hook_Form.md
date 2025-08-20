
# Day 5 – Forms with React Hook Form

## 1. Why React Hook Form?

React Hook Form is a popular library for handling forms in React because of the following reasons:

- **Lightweight**: The library is small in size and does not bloat your bundle.
- **Performance-Oriented**: It avoids unnecessary re-renders, making your forms fast and responsive.
- **Simplified Form Handling**: It provides built-in utilities for handling form data, validation, and error messages with minimal setup.
- **Less Boilerplate**: You don’t need to write complex state management logic for form fields, which makes your code clean and easy to maintain.

---

## 2. Basic Setup & Usage

### Installation
ref : https://react-hook-form.com/
ref : https://www.npmjs.com/package/react-hook-form
```bash
npm install react-hook-form
```

### Import & Initialize

```js
import { useForm } from "react-hook-form";

const { register, handleSubmit, formState: { errors } } = useForm();
```

- `register`: Used to register input fields along with their validation rules.
- `handleSubmit`: A wrapper function to handle the form submission.
- `errors`: An object containing validation errors for each form field.

### Create Controlled Form

```jsx
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("firstName", { required: "First name is required" })} />
  {errors.firstName && <p>{errors.firstName.message}</p>}
  <input type="submit" />
</form>
```

This form:
- Registers a field named `firstName` with a required validation rule.
- Displays an error message if the field is left empty.
- Uses `handleSubmit` to handle form data on submit.

---

## 3. Key Concepts

- **register()**: Connects your input fields to the React Hook Form system and applies validation rules.
- **handleSubmit()**: Takes a callback function that receives the form data when the form is valid and submitted.
- **errors**: Automatically tracks validation errors for fields.
- **No need for manual onChange handlers**: React Hook Form automatically tracks changes and updates state internally.

---

## 4. Advanced Features

- **Custom Validation Rules**: You can apply complex rules like `minLength`, `pattern`, etc.

```jsx
<input {...register("email", { 
  required: "Email is required", 
  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
})} />
```

- **Multiple Fields**: Simply use the `register` function for each field:

```jsx
<input {...register("lastName", { required: true })} />
```

- **Error Messaging**: Error messages can be tied directly to each field, making the UX smooth and user-friendly.

---

## 5. Mini Task for Day 5

### Task:

Build a **Registration Form** using React Hook Form.

### Fields:

- First Name (required)
- Last Name (required)
- Email (required, must be a valid email)

### Requirements:

- Show error messages when fields are invalid or empty.
- On successful submit, display form data in the console using `console.log()`.

```jsx
function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: "First Name is required" })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName", { required: "Last Name is required" })} />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input {...register("email", { 
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Invalid email format"
        }
      })} />
      {errors.email && <p>{errors.email.message}</p>}

      <input type="submit" />
    </form>
  );
}
```

This example demonstrates a clean and effective form using React Hook Form.
