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
import { useState } from "react";
import { editProducts, getProduct } from "../store/Product/product.actions";
const Edit = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [creds, setCreds] = useState({
    name: product.name,
    price: product.price,
    product_image: product.product_image,
    categoryId: product.categoryId._id,
  });
  const { data } = useSelector((store) => store.category);
  const dispatch = useDispatch();
  const toast = useToast()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("afte edited", creds, product._id);
    dispatch(editProducts(product._id, creds));
    dispatch(getProduct());
    toast({
      title: "Data edited Successfull",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme={"whatsapp"}>
        Edit Product
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        key={product._id}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product Details</ModalHeader>
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
                value={creds.categoryId}
                name="categoryId"
                onChange={handleChange}
              >
                {data?.map((el) => (
                  <option value={el._id}> {el.category} </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={handleSubmit}>
              Add
            </Button>
            <Button onClick={onClose} colorScheme="red">
              CLose
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Edit;
