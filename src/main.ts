import {FacilityRepository} from "./infrastructure/facilityRepositories/FacilityRepository";
import {DataSource} from "./infrastructure/Database";
import {FacilityService} from "./services/facilityServices/FacilityService";
import {FacilityManagerRepository} from "./infrastructure/userRepositories/FacilityManagerRepository";
import {FacilityTypeRepository} from "./infrastructure/facilityRepositories/FacilityTypeRepository";

const dataSource = new DataSource()

const facilityManagersRepo = new FacilityManagerRepository(dataSource)
const facilitiesRepo = new FacilityRepository(dataSource)
const facilityTypesRepo = new FacilityTypeRepository(dataSource)

const facilities = new FacilityService(facilityManagersRepo, facilitiesRepo, facilityTypesRepo)

async function main() {
  console.log(await facilities.getFacilities())
  console.log(await facilities.addFacility("Facility 1", 1, 1))
  console.log(await facilities.addFacility("Facility 2", 2, 2))
  console.log(await facilities.getFacilities())
}

main()
