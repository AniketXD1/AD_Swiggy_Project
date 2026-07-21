import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";

import MOCK_DATA from "../mocks/resCardMock.json";

it("should render RestaurantCard component with props  data ", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  // query something
  const name = screen.getByText("Barbeque Nation");
  expect(name).toBeInTheDocument;
});

/*it("should render restaurantcard component with Promoted Label", () => {
  // you have to test this home work
  // homework -test :higher order component : withPromotedLabel()

  render(<RestaurantCard />);

  const promotedLabel = screen.getByRole("withOpenLabel");

  expect(promotedLabel).toBeInTheDocument();
});*/

/*it("should render restaurantcard component with Open Label", () => {
  const OpenRestaurantCard = withOpenLabel(RestaurantCard);

  render(<OpenRestaurantCard />);

  const openLabel = screen.getByText("Open");

  expect(openLabel).toBeInTheDocument();
});*/
