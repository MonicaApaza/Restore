using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {

        [HttpGet("not-foud")]
        public ActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("bad-request")]
        public ActionResult GetBadRequest()
        {
            return BadRequest("This is a bad request");
        }

        [HttpGet("unauthorized")]
        public ActionResult GetUnauthorized()
        {
            return Unauthorized();
        }

        [HttpGet("server-error")]
        public ActionResult GetServerError()
        {
            throw new Exception("An server error ocurred");
        }

        [HttpGet("validation-error")]
        public ActionResult GetValidationError()
        {   
            ModelState.AddModelError("Errror1","Error 1 ocurred");
            ModelState.AddModelError("Errror2","Error 2 ocurred");
            return ValidationProblem();
        }

    }
}