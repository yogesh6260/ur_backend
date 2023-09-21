const ipInfo = require("ipinfo");

const verifyIp = async (req, res, next) => {
  // Current ip information
  ipInfo((err, cLoc) => {
    res.status(200).json({
      success: true,
      message: "IP Data retrieved successfully!",
      data: cLoc,
    });
    console.log(err);
    // { ip: "94. ... .77",
    //   hostname: "... .com",
    //   city: "...",
    //   region: "England",
    //   country: "GB",
    //   loc: "5...,3...",
    //   org: "... UK Limited",
    //   postal: "..."
  });
};

module.exports = { verifyIp };
