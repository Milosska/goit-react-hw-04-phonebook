import { Formik } from 'formik';
import { object, string } from 'yup';
import 'yup-phone';
import PropTypes from 'prop-types';
import {
  FormikForm,
  Label,
  Input,
  ErrorText,
  FormBtn,
} from './ContactForm.styled';

export const ContactForm = ({ onFormSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const FormScheme = object({
    name: string()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
        excludeEmptyString: true,
      })
      .required('Required'),
    number: string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          excludeEmptyString: true,
        }
      )
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormScheme}
      onSubmit={(values, actions) => {
        onFormSubmit(values, actions);
      }}
    >
      <FormikForm autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" />
          <ErrorText name="name" component="p" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <ErrorText name="number" component="p" />
        </Label>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormikForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
