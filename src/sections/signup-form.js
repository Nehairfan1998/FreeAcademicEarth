// import { em } from "polished";
import React, { useState } from "react";
import { Button, Input, Box, Container, Heading, Text } from "theme-ui";

const SignUpForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [subject, setSubject] = useState("");

  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      websiteContactForm: {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
      },
    };
    data = { dataJson: JSON.stringify(data) };
    // console.log(data, "data after stringify");
    function createFormUrlEncoded(data) {
      let formBody = [],
        encodedKey = encodeURIComponent("alt"),
        encodedValue = encodeURIComponent(JSON.stringify(data));
      formBody.push(encodedKey + "=" + encodedValue);
      formBody = formBody.join("&");
      // console.log(formBody, "formbody");
      return formBody;
    }
    fetch(
      "https://reporting.pakkaprofile.com/api/generic/websiteContactForm/update",
      {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: createFormUrlEncoded(data),
      }
    )
      .then((res) => {
        let formFields = Object.assign(
          {},
          { name: name, email: email, phone: phone, subject: subject }
        );
        formFields.name = "";
        formFields.email = "";
        formFields.phone = "";
        formFields.subject = "";
        return res.json();
      })
      .then((res) => console.log("hi"));
    // https://reporting.pakkaprofile.com/api/generic/websiteContactForm/update
  };
  return (
    <Box id="contact" as="section" sx={styles.subscribe}>
      <Container sx={styles.container}>
        <Heading as="h3">Sign up</Heading>
        <Text as="p">
          Fill in the details to become a member of our community.
        </Text>
        <Box as="form" sx={styles.form} onSubmit={(e) => formSubmitHandler(e)}>
          <Box as="label" htmlFor="subscribeEmail" variant="styles.srOnly">
            Email
          </Box>
          <Input
            placeholder="Name"
            type="text"
            sx={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            id="subscribeEmail"
            sx={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            sx={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
            <Input
            placeholder="Confirm Password"
            type="password"
            sx={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* <Input
            placeholder="Subject"
            type="text"
            sx={styles.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          /> */}
        
        </Box>
        <Button type="submit" sx={styles.button}>
           Sign Up
          </Button>
      </Container>
    </Box>
  );
};

export default SignUpForm;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "primary",
    h3: {
      textAlign: "center",
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["16px"],
      color: "#fff",
      opacity: ".6",
      letterSpacing: ["-0.5px"],
      textAlign: "center",
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: ["100%"],
    justifyContent: "center",
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexWrap: ["wrap"],
    mt: ["30px", null, null, null, "60px"],
  },
  input: {
    width: ["100%"],
    maxWidth: ["100%", null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],
    margin: "5px 0px",
  },
  button: {
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: ["10px"],
    mx: ["auto", null, null, "0"],
    // "&:hover": {
    //   backgroundColor: "#fff",
    //   opacity: "0.8",
    // },
  },
};

