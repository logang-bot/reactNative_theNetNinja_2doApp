import React from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import FlatButton from "../shared/button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
          console.log(values);
        }}
      >
        {(props) => {
          return (
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur("title")}
              ></TextInput>
              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              ></TextInput>
              <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
                onBlur={props.handleBlur("rating")}
              ></TextInput>
              <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <FlatButton
                text="submit"
                onPress={props.handleSubmit}
              ></FlatButton>
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
