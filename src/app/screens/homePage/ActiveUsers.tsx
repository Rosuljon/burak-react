import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider, Typography } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

const ActiveUsers = () => {
  const { topUsers } = useSelector(topUsersRetriever);
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((ele) => {
                  const imagePath = `${serverApi}/${ele.memberImage}`;
                  return (
                    <Card key={ele._id} variant="outlined" className="card">
                      <CardOverflow>
                        {!ele.memberImage ? (
                          <img
                            src={"/icons/default-user.svg"}
                            className={"order-user-avatar"}
                            alt=""
                          />
                        ) : (
                          <AspectRatio ratio="1">
                            <img src={imagePath} alt="" />
                          </AspectRatio>
                        )}
                      </CardOverflow>
                      <Stack flexDirection="row" justifyContent={"center"}>
                        <Typography className="title">
                          {ele.memberNick}
                        </Typography>
                      </Stack>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default ActiveUsers;
