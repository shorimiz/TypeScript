using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(_005_Asp.Net.Startup))]
namespace _005_Asp.Net
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
