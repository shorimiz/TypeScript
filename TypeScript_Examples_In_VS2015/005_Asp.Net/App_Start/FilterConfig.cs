using System.Web;
using System.Web.Mvc;

namespace _005_Asp.Net {
    public class FilterConfig {
        public static void RegisterGlobalFilters( GlobalFilterCollection filters ) {
            filters.Add( new HandleErrorAttribute( ) );
        }
    }
}
