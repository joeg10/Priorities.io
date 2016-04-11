using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(prioritiesbeService.Startup))]

namespace prioritiesbeService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureMobileApp(app);
        }
    }
}