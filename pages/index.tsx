import Button from "../src/components/Button/Button";
import Text from "../src/components/Text/Text";
import ThemeProvider from "../src/theme/ThemeProvider";

export default function HomeScreen() {
  return (
    <ThemeProvider>
      <div>
        <h1>Home Page!</h1>
        <Text tag="h2">
          Esse é um exemplo de texto usando a tag para titulo h2
        </Text>
        <Button variant="accent">Botão Simples</Button>
      </div>
    </ThemeProvider>
  );
}
