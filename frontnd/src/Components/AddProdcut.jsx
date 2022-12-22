import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  useDisclosure,
  Button,
  FormLabel,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategory } from "../store/Category/category.actions";
import { useState } from "react";
import { getProduct, postProducts } from "../store/Product/product.actions";
const AddProdcut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [creds, setCreds] = useState({
    name: "",
    price: "",
    product_image: "",
    categoryId: "",
  });

  const { data } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("add creds", creds);
    dispatch(postProducts(creds));
    dispatch(getProduct());
    toast({
      title: "Product Added to the database",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme={"whatsapp"} mt="2rem">
        Add new Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Product Name:</FormLabel>
              <Input
                placeholder="Product Name"
                value={creds.name}
                name="name"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price:</FormLabel>
              <Input
                placeholder="Product Price"
                value={creds.price}
                name="price"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Image:</FormLabel>
              <Input
                placeholder="Product Image"
                value={creds.product_image}
                name="product_image"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Select Product Category:</FormLabel>
              <Select
                placeholder="Select Product Category"
                onChange={handleChange}
                name="categoryId"
              >
                {data?.map((el) => (
                  <option value={el._id} key={el._id}>
                    {el.category}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={handleSubmit}>
              Add
            </Button>
            <Button onClick={onClose} colorScheme="red">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProdcut;
