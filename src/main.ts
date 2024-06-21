import {FacilityRepository} from "./infrastructure/facilityRepositories/FacilityRepository";
import {DataSource} from "./infrastructure/Database";
import {FacilityService} from "./services/facilityServices/FacilityService";
import {FacilityTypeRepository} from "./infrastructure/facilityRepositories/FacilityTypeRepository";
import {UserRepository} from "./infrastructure/UserRepository";

const dataSource = new DataSource()

const facilitiesRepo = new FacilityRepository(dataSource)
const facilityTypesRepo = new FacilityTypeRepository(dataSource)
const userRepo = new UserRepository(dataSource)

const facilities = new FacilityService(userRepo, facilitiesRepo, facilityTypesRepo)

async function main() {
  console.log(await facilities.getFacilities())
  console.log(await facilities.addFacility("Facility 1", 1, 1))
  console.log(await facilities.addFacility("Facility 2", 2, 2))
  console.log(await facilities.getFacilities())
}

main()
