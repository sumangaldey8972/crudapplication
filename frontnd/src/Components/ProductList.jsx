import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  Heading,
  Img,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../store/Product/product.actions";
import Edit from "./Edit";

const ProductList = () => {
  const { data } = useSelector((store) => store.product);
  console.log("product data", data);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct());
    toast({
      title: "Product Deleted",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      w="60%"
      m="auto"
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
      backgroundColor="teal.100"
      mt="1rem"
    >
      {data?.map((el) => (
        <Card
          overflow="hidden"
          variant="outline"
          boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
          alignItems="center"
          m="auto"
          mt="2rem"
          height="20rem"
          backgroundColor="white"
        >
          <Img w="70%" height="50%" src={el.product_image} />
          <Heading size="md"> </Heading>
          <CardBody>
            <Text>Title: {el.name} </Text>
            <Text> Price:{el.price} </Text>
            <Text> Category:{el.categoryId.category} </Text>
          </CardBody>
          <CardFooter>
            <Flex gap="10px">
              <Edit product={el} />
              <Button
                colorScheme="red"
                _hover={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
                onClick={() => handleDelete(el._id)}
              >
                Delete
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
};

export default ProductList;
