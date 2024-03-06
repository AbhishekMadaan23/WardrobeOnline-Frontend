import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { resetCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
    border: none;
  }

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  cursor: pointer;
  a {
    color: inherit; /* Ensure the anchor inherits the color from its parent */
    text-decoration: none; /* Remove default underline */
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user?.currentUser?.username);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCart());
  };
  console.log("????????{{{{{", user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <a href="/">WARDROBE ONLINE</a>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            {user ? (
              <button
                style={{ background: "none", border: "none" }}
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <a href="/register" style={{ textDecoration: "none" }}>
                REGISTER
              </a>
            )}
          </MenuItem>
          {user ? (
            <MenuItem>{user}</MenuItem>
          ) : (
            <MenuItem>
              <a href="/login" style={{ textDecoration: "none" }}>
                SIGN IN
              </a>
            </MenuItem>
          )}

          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

// import React from "react";
// import styled from "styled-components";
// import SearchIcon from "@mui/icons-material/Search";
// import Search from "@mui/icons-material/Search";
// import { Badge } from "@mui/material";
// import MailIcon from "@mui/icons-material/Mail";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-item: center;
//   ${mobile({ padding: "10px 0px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid #d3d3d3;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "14px", paddingLeft: "15px" })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-item: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//     font-size: 14px
//     cursor: pointer;
//     margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}

// `;

// export const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>

//           <SearchContainer>
//             <Input placeholder="Search" />
//             <Search style={{ color: "gray", fontSize: 16 }} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Logo>WARDROBE ONLINE.</Logo>
//         </Center>
//         <Right>
//           <MenuItem>REGISTER</MenuItem>
//           <MenuItem>SIGN IN</MenuItem>
//           <MenuItem>
//             <Badge badgeContent={4} color="success">
//               <ShoppingCartOutlinedIcon color="action" />
//             </Badge>
//           </MenuItem>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;
