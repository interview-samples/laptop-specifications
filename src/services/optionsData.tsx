import { ComputerPartsData } from "../interfaces/computerParts";

const DELAY = 1000;

const dummyData: ComputerPartsData = {
  categories: [
    {
      name: "Screen",
      options: [
        { name: '13" Retina', amount: 40000, default: true },
        { name: '15" Retina', amount: 70000, default: false },
      ],
    },
    {
      name: "CPU",
      options: [
        {
          name: "2.7GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.6GHz",
          amount: 30000,
          default: true,
        },
        {
          name: "2.9GHz quad-core Intel Core i7 processor, Turbo Boost up to 3.8GHz",
          amount: 50000,
          default: false,
        },
      ],
    },
    {
      name: "Storage",
      options: [
        { name: "512GB PCIe-based SSD", amount: 10000, default: true },
        { name: "1TB PCIe-based SSD", amount: 20000, default: false },
        { name: "2TB PCIe-based SSD", amount: 25000, default: false },
      ],
    },
    {
      name: "Memory",
      options: [
        { name: "8 GB 2133MHz memory", amount: 10000, default: true },
        { name: "16 GB 2133MHz memory", amount: 15000, default: false },
      ],
    },
    {
      name: "Graphics",
      options: [
        {
          name: "Radeon Pro 455 with 2GB memory",
          amount: 30000,
          default: true,
        },
        {
          name: "Radeon Pro 460 with 4GB memory",
          amount: 40000,
          default: false,
        },
      ],
    },
  ],
};

const optionsDataSvc = {
  loadData: async () => {
    return new Promise<ComputerPartsData>((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, DELAY);
    });
  },
};

export default optionsDataSvc;
