import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member, MemberInput } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }
  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      return result.data;
    } catch (error) {
      console.log("Error, getTopUsers", error);
      throw error;
    }
  }
  public async getRestaurant(): Promise<Member> {
    try {
      const url = this.path + "/member/restaurant";
      const result = await axios.get(url);
      const restaurant: Member = result.data;
      return restaurant;
    } catch (error) {
      console.log("Error, getRestaurant", error);
      throw error;
    }
  }
  public async signup(input: MemberInput): Promise<Member> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      console.log("signup", result);
      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (error) {
      console.log("Error, signup", error);
      throw error;
    }
  }
}

export default MemberService;
