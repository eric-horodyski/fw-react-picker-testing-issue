/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { ionFireEvent as fireEvent } from "@ionic/react-test-utils";

import ExploreContainer from "./ExploreContainer";

describe("<ExploreContainer />", () => {
  it("should display the toggle", () => {
    render(<ExploreContainer />);
    const button = screen.getByTestId(/picker-button/);
    expect(button).toBeDefined();
    fireEvent.click(button);
    screen.debug();

    //expect(screen.getByText(/Confirm/)).toBeDefined();
  });
});
