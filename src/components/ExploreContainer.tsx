import { IonButton, useIonPicker } from "@ionic/react";
import { useState } from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [present] = useIonPicker();
  const [value, setValue] = useState("");
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(true);
    present({
      buttons: [
        {
          text: "Confirm",
          handler: (selected) => {
            setValue(selected.animal.value);
          },
        },
      ],
      columns: [
        {
          name: "animal",
          options: [
            { text: "Dog", value: "dog" },
            { text: "Cat", value: "cat" },
            { text: "Bird", value: "bird" },
          ],
        },
      ],
    });
  };

  return (
    <div data-testid="container">
      <IonButton
        data-testid="picker-button"
        expand="block"
        onClick={() => handleClick()}
      >
        Show Picker
      </IonButton>
      {clicked && <div data-testid="clicked">You clicked!</div>}
    </div>
  );
};

export default ExploreContainer;
