import { Box, Flex, Text, Input, NumberInput, NumberInputField, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";

const Home: NextPage = () => (
  <Box marginInline={["5%", "20%"]} paddingTop="10">
    <Flex gap={[2, 5]} marginBottom="10">
      <Input placeholder="Produto" size="lg" />
      <NumberInput defaultValue={1} min={1} size="lg">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <IconButton
        colorScheme='green'
        aria-label='adicionar'
        icon={<AddIcon />}
        size="lg"
      />

    </Flex>
    <Flex justifyContent="space-between" alignItems="center" bg="blue.700" borderRadius="10px" paddingX="10" paddingY="5">
      <Box>
        <Text fontSize="xl" fontWeight="bold">Turbina AMOOCE 100</Text>
        <Text>Quantidade: 1</Text>
      </Box>

      <IconButton
        colorScheme='red'
        aria-label='deletar'
        icon={<DeleteIcon />}
        size="lg"

      />
    </Flex>
  </Box>
);

export default Home;
